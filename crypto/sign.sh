#!/bin/bash

display_usage() {
    echo -e "\nUsage:\n$0 <file_to_sign> <private_key>\n"
}

file_to_sign=$1
private_key=$2

if [[ $# -lt 2 ]] ; then
  display_usage
  exit 1
fi

# Sign the file using sha256 digest and PKCS1 padding scheme
openssl dgst -sha256 -sign $private_key -out $file_to_sign.sha256 $file_to_sign
openssl base64 -A -in $file_to_sign.sha256
