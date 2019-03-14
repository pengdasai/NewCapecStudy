function say() {
    if (arguments[0] == 'bye'){
        return 'true';
    }
    console.log(arguments[0]);
}

say('bye')