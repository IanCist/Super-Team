// Team Member Data

const teamMembers = [
    {
      name: 'Lionel Messi',
      age: 36,
      activePlayer: true,
      position: 'forward',
      strengths: 'Ball Control',
      weaknesses: 'heading ability',
      skills: ['Dribbling', 'Shooting', 'Passing'],
      biography:
        'Lionel Messi is considered one of the greatest football players of all time...'
    },
    {
      name: 'Lionel Messi Jr',
      age: 36,
      activePlayer: true,
      position: 'Defender',
      strengths: 'Ball Control',
      weaknesses: 'heading ability',
      skills: ['Dribbling', 'Shooting', 'Passing'],
      biography:
        'Lionel Messi is considered one of the greatest football players of all time...'
    },
    {
      name: 'Lionel Messi Jr II',
      age: 36,
      activePlayer: true,
      position: 'mid',
      strengths: 'Ball Control',
      weaknesses: 'heading ability',
      skills: ['Dribbling', 'Shooting', 'Passing'],
      biography:
        'Lionel Messi is considered one of the greatest football players of all time...'
    }
  ]
  
  function generateTeamCards () {
    const teamCardsContainer = document.getElementById('teamCards')
  
    teamMembers.forEach(member => {
      const card = document.createElement('div')
      card.classList.add('col-md-4', 'mb-4', 'd-flex', 'justify-content-center')
  
      //style the BGColor of my card based on pos
      let backgroundColor
  
      switch (member.position.toLowerCase()) {
        case 'forward':
          backgroundColor = 'red'
          break
        case 'mid':
          backgroundColor = 'green'
          break
        case 'defender':
          backgroundColor = 'blue'
          break
        default:
          backgroundColor = 'gray'
      }
      
  
      card.innerHTML = `
              <div class="card small-card">
              <img src="${member.image}" class="card-img-top" alt="${member.name}">
                  <div class = "card-header">
                      ${member.name}
                  </div>
                  <div id="cardBody" class="card-body" style="background-color:${backgroundColor};">
                      <p><strong>Position:</strong> ${member.age}</p>
                      <p><strong>Position:</strong> ${member.position}</p>
                      <p><strong>Position:</strong> ${member.strengths}</p>
                      <p><strong>Position:</strong> ${member.weaknesses}</p>
                      <p><strong>Position:</strong> ${member.skills}</p>
                      <p><strong>Position:</strong> ${member.biography}</p>
                  </div>
              </div>
          `
  //will update the BG style on each child of the card
      for (let i = 0; i < card.children.length; i++) {
        card.children[i].style.backgroundColor = backgroundColor
      }
  
      teamCardsContainer.appendChild(card)
    })
  }
  
  window.onload = generateTeamCards()