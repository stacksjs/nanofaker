import type { Random } from '../random'

export class GitModule {
  constructor(private random: Random) {}

  /**
   * Generate a git branch name
   * @example faker.git.branch() // 'feature/add-authentication'
   */
  branch(): string {
    const types = ['feature', 'bugfix', 'hotfix', 'refactor', 'chore', 'docs', 'test']
    const actions = [
      'add',
      'update',
      'fix',
      'remove',
      'improve',
      'refactor',
      'optimize',
      'enhance',
      'implement',
    ]
    const subjects = [
      'authentication',
      'database',
      'api',
      'ui',
      'tests',
      'documentation',
      'config',
      'validation',
      'error-handling',
      'logging',
      'security',
      'performance',
      'caching',
    ]

    const type = this.random.arrayElement(types)
    const action = this.random.arrayElement(actions)
    const subject = this.random.arrayElement(subjects)

    return `${type}/${action}-${subject}`
  }

  /**
   * Generate a commit message
   * @example faker.git.commitMessage() // 'feat: add user authentication'
   */
  commitMessage(): string {
    const types = ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'perf']
    const scopes = ['api', 'ui', 'auth', 'db', 'config', 'deps', 'core', 'utils']
    const actions = [
      'add',
      'update',
      'fix',
      'remove',
      'improve',
      'refactor',
      'optimize',
      'enhance',
      'implement',
    ]
    const subjects = [
      'user authentication',
      'database connection',
      'API endpoint',
      'UI component',
      'test coverage',
      'documentation',
      'configuration',
      'validation logic',
      'error handling',
      'logging system',
    ]

    const type = this.random.arrayElement(types)
    const scope = this.random.boolean(0.5) ? `(${this.random.arrayElement(scopes)})` : ''
    const action = this.random.arrayElement(actions)
    const subject = this.random.arrayElement(subjects)

    return `${type}${scope}: ${action} ${subject}`
  }

  /**
   * Generate a commit SHA
   * @example faker.git.commitSha() // 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0'
   */
  commitSha(options?: { short?: boolean }): string {
    const length = options?.short ? 7 : 40
    const chars = '0123456789abcdef'
    let sha = ''
    for (let i = 0; i < length; i++) {
      sha += chars[this.random.int(0, chars.length - 1)]
    }
    return sha
  }

  /**
   * Generate a commit entry
   * @example faker.git.commitEntry() // 'a1b2c3d fix: resolve database connection issue'
   */
  commitEntry(): string {
    const sha = this.commitSha({ short: true })
    const message = this.commitMessage()
    return `${sha} ${message}`
  }

  /**
   * Generate a git author/committer string
   * @example faker.git.author() // 'John Doe <john.doe@example.com>'
   */
  commitAuthor(options?: { name?: string, email?: string }): string {
    const names = [
      'John Doe',
      'Jane Smith',
      'Bob Johnson',
      'Alice Williams',
      'Charlie Brown',
      'Diana Davis',
      'Eve Martinez',
      'Frank Garcia',
      'Grace Wilson',
      'Henry Lee',
    ]
    const name = options?.name ?? this.random.arrayElement(names)
    const email = options?.email ?? `${name.toLowerCase().replace(' ', '.')}@example.com`

    return `${name} <${email}>`
  }

  /**
   * Generate a git remote URL
   * @example faker.git.remote() // 'https://github.com/user/repo.git'
   */
  remote(options?: { protocol?: 'https' | 'ssh', platform?: 'github' | 'gitlab' | 'bitbucket' }): string {
    const protocol = options?.protocol ?? this.random.arrayElement(['https', 'ssh'])
    const platform = options?.platform ?? this.random.arrayElement(['github', 'gitlab', 'bitbucket'])

    const user = this.random.arrayElement(['acme', 'techcorp', 'devteam', 'opensource', 'mycompany'])
    const repo = this.random.arrayElement(['webapp', 'api', 'mobile-app', 'backend', 'frontend', 'monorepo'])

    const domains = {
      github: 'github.com',
      gitlab: 'gitlab.com',
      bitbucket: 'bitbucket.org',
    }

    if (protocol === 'ssh') {
      return `git@${domains[platform]}:${user}/${repo}.git`
    }
    return `https://${domains[platform]}/${user}/${repo}.git`
  }

  /**
   * Generate a semantic version tag
   * @example faker.git.tag() // 'v1.2.3'
   */
  tag(): string {
    const major = this.random.int(0, 5)
    const minor = this.random.int(0, 20)
    const patch = this.random.int(0, 50)

    const prerelease = this.random.boolean(0.2)
      ? `-${this.random.arrayElement(['alpha', 'beta', 'rc'])}.${this.random.int(1, 10)}`
      : ''

    return `v${major}.${minor}.${patch}${prerelease}`
  }
}
