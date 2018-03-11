#! /bin/bash
# NodeJS
curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
sudo yum -y install nodejs
sudo yum -y install gcc-c++ make
# MongoDB
cat <<\EOF > mongodb-org-3.4.repo
[mongodb-org-3.4]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-3.4.asc
EOF
sudo mv mongodb-org-3.4.repo /etc/yum.repos.d/
# Install package MongoDB
sudo yum install -y mongodb-org
# SELinux
sudo yum install -y policycoreutils-python
# Adding SELinux rules
semanage port -a -t mongod_port_t -p tcp 27017
# Popcorn Time
git clone https://github.com/popcorn-official/popcorn-api.git
# Switch Branch
git checkout 3.0.0
# Gulp to compile
npm install -g gulp
cd popcorn-api
npm install
npm run flow-typed install
gulp build
sudo systemctl restart mongodb
