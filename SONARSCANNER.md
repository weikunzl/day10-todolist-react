# SonarScanner 使用指南

## 概述
SonarScanner 是 SonarCloud/SonarQube 的代码质量分析工具，用于检测代码中的 bug、安全漏洞、代码异味等。

## 安装

### 方法一：使用安装脚本（推荐）
```bash
./install-sonar-scanner.sh
```

### 方法二：手动安装
1. 访问 [SonarScanner 下载页面](https://docs.sonarqube.org/latest/analyzing-source-code/scanners/sonarscanner/)
2. 下载适合您操作系统的版本
3. 解压到本地目录
4. 将 `bin` 目录添加到 PATH 环境变量

## 配置

### 1. 获取 SonarCloud Token
1. 登录 [SonarCloud](https://sonarcloud.io/)
2. 进入 User Account > Security
3. 生成一个新的 token

### 2. 设置环境变量
```bash
# 设置 SonarCloud token
export SONAR_TOKEN=your_sonarcloud_token

# 设置组织 key（如果需要）
export SONAR_ORGANIZATION=your_organization_key
```

### 3. 更新配置文件
编辑 `sonar-project.properties` 文件，更新以下配置：
- `sonar.projectKey`: 项目唯一标识符 (已配置为: weikunzl_day10-todolist-react)
- `sonar.organization`: 您的 SonarCloud 组织 key (已配置为: weikunzl)
- `sonar.host.url`: SonarCloud 服务器地址 (已配置为: https://sonarcloud.io)

## 使用方法

### 本地运行
```bash
# 运行代码分析
npm run sonar

# 或者直接使用 sonar-scanner 命令
sonar-scanner -Dsonar.login=$SONAR_TOKEN
```

### CI/CD 集成
项目已配置 GitHub Actions，会在每次 push 和 pull request 时自动运行 SonarScanner 分析。

## 配置说明

### sonar-project.properties 文件说明
- `sonar.projectKey`: 项目在 SonarCloud 中的唯一标识符
- `sonar.organization`: SonarCloud 组织标识符
- `sonar.projectName`: 项目显示名称
- `sonar.sources`: 源代码目录
- `sonar.exclusions`: 排除分析的文件模式
- `sonar.coverage.exclusions`: 排除覆盖率统计的文件模式

### 常用参数
- `-Dsonar.login=TOKEN`: 指定认证 token
- `-Dsonar.host.url=URL`: 指定 SonarQube 服务器地址
- `-Dsonar.projectKey=KEY`: 指定项目 key
- `-Dsonar.sources=DIR`: 指定源代码目录

## 故障排除

### 1. 权限问题
确保 SonarScanner 有读取源代码的权限。

### 2. 网络问题
如果无法连接到 SonarCloud，检查网络连接和防火墙设置。

### 3. Token 问题
确保 SONAR_TOKEN 环境变量设置正确且有效。

### 4. 项目配置问题
检查 `sonar-project.properties` 文件中的配置是否正确。

## 更多信息
- [SonarScanner 官方文档](https://docs.sonarqube.org/latest/analyzing-source-code/scanners/sonarscanner/)
- [SonarCloud 文档](https://docs.sonarcloud.io/)
