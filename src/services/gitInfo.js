const owner = "22mukeshk";
const repositoryPath = "vueProject";
const accessToken = "";

export async function getCommitHistory(){
        try {
                const response = await fetch(`https://api.github.com/repos/${owner}/${repositoryPath}/commit`,{
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


