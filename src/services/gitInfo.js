const owner = "22mukeshk";
const repositoryPath = "vueProject";
const accessToken = "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";

export async function getCommitHistory(){
        try {
                const response = await fetch(`https://api.github.com/repos/${owner}/${repositoryPath}/commits`,{
                        headers:{
                                Authorization:`token ${accessToken}` 
                        }
                });
                const gitCommit = await response.json();
                console.log("gitCommit",gitCommit)
                        return gitCommit;
                
        } catch (error) {
                console.log("error in git commit history",error)
        }
}


