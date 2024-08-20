function setUserName(name){
    // Complex Logic
    console.log(name)
    this.name = name
}

function setUser(name, pass, isLogin){
    // setUserName(name) // This is called without .call() so it's context will be cleared after its execution and the name will not be set in the User Object. To fix this we will use the .call()
    setUserName.call(this,name) // Now this will work fine and the context of the setUser function is passed to the setUserName function and the context of the setUser will save the name and set it too while the context of the setUserName is destroyed.

    this.pass = pass
    this.isLogin = isLogin
}

const u1 = new setUser('ABC', 123, true)
console.log(u1) // Without the .call the output will not contain the Name it will only contain the pass and isLogin