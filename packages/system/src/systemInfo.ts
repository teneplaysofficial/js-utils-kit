import { ARCHITECTURE, CPUCores, CPUModel } from './cpu';
import { cwd, homeDir } from './info';
import { freeMemory, totalMemory } from './memory';
import { PLATFORM } from './platform';
import { NODE_VERSION } from './version';

export function systemInfo() {
  return {
    platform: PLATFORM,
    architecture: ARCHITECTURE,
    node: NODE_VERSION,
    cpus: CPUCores,
    cpuModel: CPUModel,
    memory: {
      total: totalMemory,
      free: freeMemory,
    },
    cwd,
    home: homeDir,
  };
}
