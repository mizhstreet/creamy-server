resource "aws_instance" "default" {
  ami                    = var.ami-id
  iam_instance_profile   = var.iam-instance-profile
  instance_type          = var.instance-type
  key_name               = var.key-pair
  private_ip             = var.private-ip
  subnet_id              = var.subnet-id
  vpc_security_group_ids = var.vpc-security-group-ids

  user_data = <<EOF
#!/bin/bash
cd /tmp
echo '#!/bin/bash
sudo yum install -y gcc-c++ make ruby
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
sudo yum install -y nodejs
curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
sudo yum install -y yarn
source ~/.bashrc
cd /home/ec2-user
wget https://aws-codedeploy-ap-northeast-1.s3.ap-northeast-1.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
sudo yarn global add pm2@4.3.1' >> init.sh
chmod +x init.sh
/bin/su -c "/tmp/init.sh" - ec2-user
EOF

  tags = {
    Name = var.name
  }
}
