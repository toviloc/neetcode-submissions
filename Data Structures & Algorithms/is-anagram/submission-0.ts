class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length === t.length)
        {
            const sArr: string[] = [...s].sort();
            const tArr: string[] = [...t].sort();
            if(JSON.stringify(sArr) === JSON.stringify(tArr))
            {
                return true;
            }
            return false;
        }
        return false;
    }
}
