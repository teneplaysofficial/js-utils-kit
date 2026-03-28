import type { DeepPartial } from './utils/DeepPartial';

type Person =
  | string
  | {
      name: string;
      email: string;
      url: string;
    };

type Repository =
  | string
  | {
      type: string;
      url: string;
      directory: string;
    };

type Bugs =
  | string
  | {
      url: string;
      email: string;
    };

type FundingItem =
  | string
  | {
      url: string;
      type: string;
    };

type Funding = FundingItem | FundingItem[];

type LicenseItem = {
  type: string;
  url: string;
};

type DevEngineItem = {
  name: string;
  version: string;
  onFail: 'ignore' | 'warn' | 'error' | 'download';
};

type DevEngineField = DevEngineItem | DevEngineItem[];

type DevEngines = {
  os: DevEngineField;
  cpu: DevEngineField;
  libc: DevEngineField;
  runtime: DevEngineField;
  packageManager: DevEngineField;
};

export type PackageJson = DeepPartial<{
  name: string;
  displayName: string;
  version: string;
  description: string;
  keywords: string[];

  private: boolean | 'true' | 'false';

  homepage: string;
  repository: Repository;
  bugs: Bugs;

  license: string;
  licenses: LicenseItem[];

  author: Person;
  contributors: Person[];
  maintainers: Person[];

  funding: Funding;

  files: string[];

  main: string;
  module: string;
  types: string;
  typings: string;

  exports: unknown;
  imports: Record<string, unknown>;

  bin: string | Record<string, string>;
  man: string | string[];

  type: 'commonjs' | 'module';

  directories: {
    bin: string;
    doc: string;
    example: string;
    lib: string;
    man: string;
    test: string;
  };

  scripts: Record<string, string>;
  config: Record<string, unknown>;

  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  optionalDependencies: Record<string, string>;
  peerDependencies: Record<string, string>;

  peerDependenciesMeta: Record<
    string,
    {
      optional: boolean;
    }
  >;

  bundleDependencies: boolean | string[];
  bundledDependencies: boolean | string[];

  engines: Record<string, string>;
  engineStrict: boolean;

  os: string[];
  cpu: string[];

  devEngines: DevEngines;

  preferGlobal: boolean;

  publishConfig: {
    access: 'public' | 'restricted';
    tag: string;
    registry: string;
    provenance: boolean;
  };

  dist: {
    shasum: string;
    tarball: string;
  };

  readme: string;

  esnext:
    | string
    | {
        main: string;
        browser: string;
      };

  workspaces:
    | string[]
    | {
        packages: string[];
        nohoist: string[];
      };

  resolutions: Record<string, unknown>;
  overrides: Record<string, unknown>;

  packageManager: string;

  typesVersions: Record<string, Record<string, string[]>>;

  volta: {
    extends: string;
    node: string;
    npm: string;
    pnpm: string;
    yarn: string;
  };

  pnpm: Record<string, unknown>;

  eslintConfig: Record<string, unknown>;
  prettier: Record<string, unknown>;
  stylelint: Record<string, unknown>;
  ava: Record<string, unknown>;
  release: Record<string, unknown>;
  jscpd: Record<string, unknown>;

  stackblitz: {
    installDependencies: boolean;
    startCommand: string | boolean;
    compileTrigger: 'auto' | 'keystroke' | 'save';
    env: Record<string, string>;
  };

  [key: string]: unknown;
}>;
