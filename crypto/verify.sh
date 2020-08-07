#!/bin/bash

display_usage() {
    echo -e "\nUsage:\n$0 <file> <signature> <public_key>\n" 
}

file_name=$1
signature=$2
public_key=$3

if [[ $# -lt 3 ]] ; then
  display_usage
  exit 1
fi

openssl base64 -d -A -in $signature -out /tmp/$file_name.sha256
openssl dgst -sha256 -verify $public_key -signature /tmp/$file_name.sha256 $file_name
rm /tmp/$file_name.sha256
