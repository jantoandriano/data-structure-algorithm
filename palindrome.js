const palindrome = (s) => {
    const toChars = (s) => {
        let lowercase = s.toLowerCase()
        const a = "abcdefghijklmnopqrstuvwxyz"
        let ans = ""
        
        for (const c of lowercase) {
            for (let i = 0; i < a.length; i++) {
                if (c === a[i]) {
                    ans += c
                }
            }
        }
        return ans;
    }
    const isPal = (s) => {
        if (s.length <= 1) {
            return true
        } 
        
        return s[0] === s[s.length-1] && isPal(s.slice(1, s.length-1))
        
    }
    return isPal(toChars(s))
}
console.log(palindrome("Gateman sees name, garageman sees nametag"));
console.log(palindrome("makan daun"));