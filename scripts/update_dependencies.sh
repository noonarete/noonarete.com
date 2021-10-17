#!/usr/bin/env bash
set -x # Echo commands

hugo mod get -u
hugo mod npm pack
npm update
