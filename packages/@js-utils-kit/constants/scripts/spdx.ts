import { Project } from 'ts-morph';
import type { SPDX } from '../src/spdx-license';

// https://github.com/spdx/license-list-data/blob/main/json/licenses.json
// const SOURCE = 'https://raw.githubusercontent.com/spdx/license-list-data/main/json/licenses.json';
const SOURCE =
  'https://raw.githubusercontent.com/spdx/license-list-data/c4a7237ec8f4654e867546f9f409749300f1bf4c/json/licenses.json';

type SPDXSource = {
  licenses: {
    licenseId: string;
    name: string;
    referenceNumber: number;
    isOsiApproved: boolean;
    isDeprecatedLicenseId: boolean;
    detailsUrl: string;
    isFsfLibre: boolean;
  }[];
};

const res = await fetch(SOURCE);
const data = (await res.json()) as SPDXSource;

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
});

const file = project.getSourceFileOrThrow('src/spdx-license.ts');

const licenseVar = file.getVariableDeclarationOrThrow('SPDX_LICENSE');
const identifiersVar = file.getVariableDeclarationOrThrow('SPDX_LICENSE_IDENTIFIERS');

const licenses: SPDX = {};
const identifiers: string[] = [];

for (const lic of data.licenses) {
  licenses[lic.licenseId] = {
    id: lic.licenseId,
    name: lic.name,
    referenceNumber: lic.referenceNumber,
    isOsiApproved: lic.isOsiApproved,
    isFsfLibre: lic.isFsfLibre,
    isDeprecated: lic.isDeprecatedLicenseId,
    url: lic.detailsUrl,
  };

  identifiers.push(lic.licenseId);
}

licenseVar.setInitializer(`${JSON.stringify(licenses, null, 2)} as const`);
identifiersVar.setInitializer(`${JSON.stringify(identifiers, null, 2)} as const`);

await file.save();

console.log(`Synced ${identifiers.length} licenses`);
