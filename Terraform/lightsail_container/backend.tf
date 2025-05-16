terraform {
  backend "s3" {
    bucket         = "insert bucket name here"
    key            = "terraform/state/lightsail/lightsail.tfstate" 
    region         = "us-east-1" 
    encrypt        = true
  }
}