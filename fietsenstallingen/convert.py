#!/usr/bin/python

from rdflib import Graph

g = Graph()
g.parse("https://informatievlaanderen.github.io/OSLO-Data/fietsenstallingen/velopark.jsonld")
g.serialize(destination="velopark.ttl")
