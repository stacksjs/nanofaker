import type { Random } from '../random'
import type { LocaleDefinition } from '../types'

export class SystemModule {
  constructor(
    private random: Random,
    private locale?: LocaleDefinition,
  ) {}

  /**
   * Generate a file name
   * @example faker.system.fileName() // 'report.pdf'
   */
  fileName(options?: { extension?: string }): string {
    let names: string[]
    if (this.locale?.system?.fileName) {
      names = this.locale.system.fileName
    }
    else {
      names = [
        'document', 'report', 'presentation', 'spreadsheet', 'image', 'video', 'audio',
        'backup', 'archive', 'data', 'config', 'settings', 'log', 'cache', 'temp',
        'index', 'main', 'app', 'script', 'style', 'layout', 'component', 'module',
      ]
    }
    const name = this.random.arrayElement(names)
    const ext = options?.extension ?? this.fileExtension()
    return `${name}.${ext}`
  }

  /**
   * Generate a file extension
   * @example faker.system.fileExtension() // 'pdf'
   */
  fileExtension(): string {
    const extensions = [
      'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'csv', 'json', 'xml',
      'jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp', 'ico',
      'mp3', 'wav', 'ogg', 'flac', 'aac', 'm4a',
      'mp4', 'avi', 'mov', 'wmv', 'flv', 'webm', 'mkv',
      'zip', 'rar', 'tar', 'gz', '7z', 'bz2',
      'html', 'css', 'js', 'ts', 'jsx', 'tsx', 'vue', 'py', 'java', 'cpp', 'c', 'go', 'rs',
    ]
    return this.random.arrayElement(extensions)
  }

  /**
   * Generate a common file name
   * @example faker.system.commonFileName() // 'README.md'
   */
  commonFileName(): string {
    const files = [
      'README.md', 'package.json', 'tsconfig.json', '.gitignore', '.env', 'docker-compose.yml',
      'Dockerfile', 'index.html', 'index.js', 'app.js', 'main.py', 'requirements.txt',
      'Makefile', 'LICENSE', 'CHANGELOG.md', 'yarn.lock', 'package-lock.json', 'pom.xml',
    ]
    return this.random.arrayElement(files)
  }

  /**
   * Generate a MIME type
   * @example faker.system.mimeType() // 'application/json'
   */
  mimeType(): string {
    const types = [
      'application/json', 'application/xml', 'application/pdf', 'application/zip',
      'text/html', 'text/css', 'text/javascript', 'text/plain', 'text/csv',
      'image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp',
      'audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/webm',
      'video/mp4', 'video/webm', 'video/ogg', 'video/avi',
      'application/octet-stream', 'multipart/form-data', 'application/x-www-form-urlencoded',
    ]
    return this.random.arrayElement(types)
  }

  /**
   * Generate a common MIME type
   * @example faker.system.commonMimeType() // 'image/png'
   */
  commonMimeType(): string {
    const types = [
      'application/json', 'application/pdf', 'text/html', 'text/plain', 'text/css',
      'image/jpeg', 'image/png', 'image/gif', 'audio/mpeg', 'video/mp4',
    ]
    return this.random.arrayElement(types)
  }

  /**
   * Generate a file type
   * @example faker.system.fileType() // 'image'
   */
  fileType(): string {
    if (this.locale?.system?.fileType) {
      return this.random.arrayElement(this.locale.system.fileType)
    }

    const types = [
      'audio', 'image', 'text', 'video', 'application', 'document', 'spreadsheet',
      'presentation', 'archive', 'code', 'data', 'font', 'executable',
    ]
    return this.random.arrayElement(types)
  }

  /**
   * Generate a directory path
   * @example faker.system.directoryPath() // '/usr/local/bin'
   */
  directoryPath(): string {
    const paths = [
      '/usr/local/bin', '/usr/bin', '/etc', '/var/log', '/tmp', '/home', '/root',
      '/opt', '/srv', '/mnt', '/media', '/dev', '/proc', '/sys',
      'C:\\Program Files', 'C:\\Users', 'C:\\Windows', 'C:\\Temp',
      '/Applications', '/Library', '/System', '/Users', '/Documents', '/Downloads',
    ]
    return this.random.arrayElement(paths)
  }

  /**
   * Generate a file path
   * @example faker.system.filePath() // '/usr/local/bin/config.json'
   */
  filePath(): string {
    return `${this.directoryPath()}/${this.fileName()}`
  }

  /**
   * Generate a semantic version
   * @example faker.system.semver() // '1.2.3'
   */
  semver(): string {
    const major = this.random.int(0, 10)
    const minor = this.random.int(0, 20)
    const patch = this.random.int(0, 50)
    return `${major}.${minor}.${patch}`
  }

  /**
   * Generate a network interface
   * @example faker.system.networkInterface() // 'eth0'
   */
  networkInterface(): string {
    const interfaces = [
      'eth0', 'eth1', 'wlan0', 'wlan1', 'lo', 'docker0', 'veth0', 'br0', 'tun0', 'tap0',
      'enp0s3', 'ens33', 'wlp2s0', 'en0', 'en1', 'wlan0', 'WiFi', 'Ethernet',
    ]
    return this.random.arrayElement(interfaces)
  }

  /**
   * Generate a cron expression
   * @example faker.system.cron() // '0 0 * * *'
   */
  cron(): string {
    const minute = this.random.boolean(0.5) ? '*' : this.random.int(0, 59)
    const hour = this.random.boolean(0.5) ? '*' : this.random.int(0, 23)
    const day = this.random.boolean(0.5) ? '*' : this.random.int(1, 31)
    const month = this.random.boolean(0.5) ? '*' : this.random.int(1, 12)
    const weekday = this.random.boolean(0.5) ? '*' : this.random.int(0, 6)

    return `${minute} ${hour} ${day} ${month} ${weekday}`
  }
}
