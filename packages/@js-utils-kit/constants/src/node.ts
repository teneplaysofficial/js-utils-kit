/**
 * Node.js builtin module names.
 *
 * @remarks
 * Useful for:
 * - npm package name validation
 * - preventing conflicts with core Node.js modules
 * - tooling and package analysis
 *
 * @see https://nodejs.org/api/modules.html#core-modules
 */
export const NODE_BUILTIN_MODULES = [
  '_http_agent',
  '_http_client',
  '_http_common',
  '_http_incoming',
  '_http_outgoing',
  '_http_server',
  '_stream_duplex',
  '_stream_passthrough',
  '_stream_readable',
  '_stream_transform',
  '_stream_wrap',
  '_stream_writable',
  '_tls_common',
  '_tls_wrap',
  'assert',
  'assert/strict',
  'async_hooks',
  'buffer',
  'child_process',
  'cluster',
  'console',
  'constants',
  'crypto',
  'dgram',
  'diagnostics_channel',
  'dns',
  'dns/promises',
  'domain',
  'events',
  'fs',
  'fs/promises',
  'http',
  'http2',
  'https',
  'inspector',
  'inspector/promises',
  'module',
  'net',
  'os',
  'path',
  'path/posix',
  'path/win32',
  'perf_hooks',
  'process',
  'punycode',
  'querystring',
  'readline',
  'readline/promises',
  'repl',
  'stream',
  'stream/consumers',
  'stream/promises',
  'stream/web',
  'string_decoder',
  'sys',
  'timers',
  'timers/promises',
  'tls',
  'trace_events',
  'tty',
  'url',
  'util',
  'util/types',
  'v8',
  'vm',
  'wasi',
  'worker_threads',
  'zlib',
  'node:sea',
  'node:sqlite',
  'node:test',
  'node:test/reporters',
] as const;

/**
 * Union type of all Node.js builtin module names.
 */
export type NodeBuiltinModule = (typeof NODE_BUILTIN_MODULES)[number];
