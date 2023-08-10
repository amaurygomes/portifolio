async function fetchGitHubUser(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('Erro ao obter os dados do usuário');
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  // Exemplo de uso da função
  const username = 'amaurygomes';
  fetchGitHubUser(username)
    .then(userData => {


        // Se usuario existir alterar o DOM
      if (userData) {
        const bioParagraph = document.querySelector('.bio');
        bioParagraph.textContent = userData.bio;
        const avatarImage = document.querySelector('.img-aside');
        avatarImage.src = userData.avatar_url;
    

         // Se usuario não existir mandar pro 404
      } else {
        window.location.href = '404.html';
      }
    })
    .catch(error => {
      console.error('Erro:', error);
    });
  