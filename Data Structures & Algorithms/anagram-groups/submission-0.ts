class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res = {}
        for (let s of strs)
        {
            const sortS = s.split('').sort().join('');
            if(!res[sortS]){
                res[sortS] = []
            }
            res[sortS].push(s);
        }
        return Object.values(res);
    }
}
