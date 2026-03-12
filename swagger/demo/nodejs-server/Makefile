-include .env
export

VERSION := $(shell cat VERSION)
# PUBLISHED is a file that contains the docker image to publish to. If it doesn't exist, use the default DOCKER_IMAGE which is an enviorment variable in CI
PUBLISHEDIMAGE := $(shell if [ -f PUBLISHED ]; then cat PUBLISHED; else echo $(DOCKER_IMAGE); fi)


build:
	docker build -t informatievlaanderen/swagger-demo-persoon:${VERSION} .

build-linux:
	docker build --platform=linux/amd64 -t informatievlaanderen/swagger-demo-persoon:${VERSION} .

exec:
	docker run -it --rm --name swagger-demo-persoon -p 8080:8080 informatievlaanderen/swagger-demo-persoon:${VERSION} sh

run:
	docker run -d --rm --name swagger-demo-persoon -p 8080:8080 informatievlaanderen/swagger-demo-persoon:${VERSION}


stop:
	docker stop swagger-demo-persoon

publish:
	echo "Publishing to ${PUBLISHEDIMAGE}:${VERSION}"
	docker tag informatievlaanderen/swagger-demo-persoon:${VERSION} ${PUBLISHEDIMAGE}:${VERSION}
	docker push ${PUBLISHEDIMAGE}:${VERSION}
