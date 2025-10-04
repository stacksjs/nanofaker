import { existsSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { join } from 'node:path'

export type PackageManager = 'bun' | 'npm' | 'yarn' | 'pnpm'

/**
 * Detect the package manager used in the current project
 */
export function detectPackageManager(): PackageManager {
  // Check for lock files in order of preference
  const cwd = process.cwd()

  if (existsSync(join(cwd, 'bun.lockb')) || existsSync(join(cwd, 'bun.lock'))) {
    return 'bun'
  }
  if (existsSync(join(cwd, 'pnpm-lock.yaml'))) {
    return 'pnpm'
  }
  if (existsSync(join(cwd, 'yarn.lock'))) {
    return 'yarn'
  }
  if (existsSync(join(cwd, 'package-lock.json'))) {
    return 'npm'
  }

  // Default to bun if no lock file is found
  return 'bun'
}

/**
 * Install a package using the detected package manager
 */
export function installPackage(packageName: string, options: { silent?: boolean } = {}): boolean {
  const pm = detectPackageManager()
  const { silent = false } = options

  if (!silent) {
    console.log(`\n📦 Installing ${packageName} using ${pm}...`)
  }

  const commands: Record<PackageManager, { cmd: string, args: string[] }> = {
    bun: { cmd: 'bun', args: ['add', packageName] },
    npm: { cmd: 'npm', args: ['install', packageName] },
    yarn: { cmd: 'yarn', args: ['add', packageName] },
    pnpm: { cmd: 'pnpm', args: ['add', packageName] },
  }

  const { cmd, args } = commands[pm]

  try {
    const result = spawnSync(cmd, args, {
      stdio: silent ? 'pipe' : 'inherit',
      shell: true,
    })

    if (result.status === 0) {
      if (!silent) {
        console.log(`✓ Successfully installed ${packageName}`)
      }
      return true
    }
    else {
      if (!silent) {
        console.error(`✗ Failed to install ${packageName}`)
      }
      return false
    }
  }
  catch (error) {
    if (!silent) {
      console.error(`✗ Error installing ${packageName}:`, error)
    }
    return false
  }
}
