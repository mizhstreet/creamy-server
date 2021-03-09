resource "aws_key_pair" "creamy-key" {
  key_name   = "creamy-key"
  public_key = file("./mykey.pem")
}
