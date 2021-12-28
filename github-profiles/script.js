const input = document.querySelector('input')
let resultBox = document.querySelector('.result-box')
const loading = document.querySelector('.outer-circle')
loading.remove()
input.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter' && input.value.length > 0) {
    if (resultBox) resultBox.remove()
    document.body.append(loading)
    fetchData()
  }
})

async function fetchData() {
  const r = await fetch(`https://api.github.com/users/${input.value}`)
  if (r.status === 200) {
    const user = await r.json()
    console.log(user)
    loading.remove()
    const followers = document.createElement('span')
    followers.innerText = user.followers + ' Followers'
    const following = document.createElement('span')
    following.innerText = user.following + ' Following'
    const repos = document.createElement('span')
    repos.innerText = user.public_repos + ' Repos'
    const metaDataBox = document.createElement('div')
    metaDataBox.classList.add('metadata-box')
    metaDataBox.append(followers)
    metaDataBox.append(following)
    metaDataBox.append(repos)
    const bio = document.createElement('p')
    bio.classList.add('desc')
    bio.innerText = user.bio
    const fullname = document.createElement('h3')
    fullname.classList.add('fullname')
    fullname.innerText = user.name
    const userInfoBox = document.createElement('div')
    userInfoBox.classList.add('user-info-box')
    userInfoBox.append(fullname)
    userInfoBox.append(bio)
    userInfoBox.append(metaDataBox)
    const profilePic = document.createElement('div')
    profilePic.classList.add('profile-pic')
    profilePic.style.background = `url(${user.avatar_url}) 0% 0% / cover`
    resultBox = document.createElement('div')
    resultBox.classList.add('result-box')
    resultBox.append(profilePic)
    resultBox.append(userInfoBox)
    document.body.append(resultBox)
  }
}
