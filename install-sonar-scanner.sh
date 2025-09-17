#!/bin/bash

# SonarScanner 安装脚本
# 适用于 macOS 和 Linux

echo "正在安装 SonarScanner..."

# 检测操作系统
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    SONAR_SCANNER_VERSION="4.8.0.2856"
    DOWNLOAD_URL="https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-${SONAR_SCANNER_VERSION}-macosx.zip"
    EXTRACT_DIR="sonar-scanner-${SONAR_SCANNER_VERSION}-macosx"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    SONAR_SCANNER_VERSION="4.8.0.2856"
    DOWNLOAD_URL="https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-${SONAR_SCANNER_VERSION}-linux.zip"
    EXTRACT_DIR="sonar-scanner-${SONAR_SCANNER_VERSION}-linux"
else
    echo "不支持的操作系统: $OSTYPE"
    exit 1
fi

# 下载 SonarScanner
echo "下载 SonarScanner..."
wget -O sonar-scanner.zip "$DOWNLOAD_URL"

# 解压
echo "解压 SonarScanner..."
unzip sonar-scanner.zip

# 移动到本地目录
echo "安装 SonarScanner..."
mkdir -p ~/sonar-scanner
mv "$EXTRACT_DIR" ~/sonar-scanner/sonar-scanner

# 添加到 PATH
echo "配置环境变量..."
echo 'export PATH="$HOME/sonar-scanner/sonar-scanner/bin:$PATH"' >> ~/.bashrc
echo 'export PATH="$HOME/sonar-scanner/sonar-scanner/bin:$PATH"' >> ~/.zshrc

# 清理下载文件
rm sonar-scanner.zip

echo "SonarScanner 安装完成！"
echo "请重新启动终端或运行: source ~/.bashrc"
echo ""
echo "使用方法："
echo "1. 设置环境变量: export SONAR_TOKEN=your_token"
echo "2. 运行分析: npm run sonar"
