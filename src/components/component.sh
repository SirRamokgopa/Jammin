#!/bin/bash

# This is just a thing to create the files I need 
if [ $1 ]
then
    echo "making component ${1}"
    mkdir "$1" 
    cd $1
    touch "${1}.js" "${1}.css"
else 
    echo  "You need to pass a string as an argument, my dude."
fi