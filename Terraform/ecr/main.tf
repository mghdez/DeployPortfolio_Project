resource "aws_ecr_repository" "portfolio_ecr" {
  name                 = "portfolio-registry"
  image_tag_mutability = "MUTABLE"
  image_scanning_configuration {
    scan_on_push = false
  }
}