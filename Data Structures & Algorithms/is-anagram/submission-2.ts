class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length)
        {
            return false;
        }
        const sArr: string[] = [...s].sort();
            const tArr: string[] = [...t].sort();
                return JSON.stringify(sArr) === JSON.stringify(tArr);
    }
}
