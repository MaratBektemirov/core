#!/bin/bash
# Generates RSA private/public key pair

display_usage() {
    echo -e "\nUsage:\n$0 <public_key> <private_key>\n" 
}

public_key=$1
private_key=$2

if [[ $# -lt 2 ]] ; then
  display_usage
  exit 1
fi

# Generate 512 bit Private key
openssl genrsa -out $private_key 512

# Separate the public part from the Private key file.
openssl rsa -in $private_key -pubout > $public_key
