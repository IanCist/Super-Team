// Team Member Data

const teamMembers = [
    {
      name: 'Lionel Messi',
      img:'image/lionelmessi.jpeg',
      age: 36,
      activePlayer: true,
      position: 'forward',
      strengths: 'Ball Control',
      weaknesses: 'heading ability',
      skills: ['Dribbling', 'Shooting', 'Passing'],
      biography:
        'Lionel Messi, born on June 24, 1987, in Rosario, Argentina, is widely regarded as one of the greatest footballers of all time, having spent the majority of his career at FC Barcelona where he won numerous titles including ten La Liga championships and four UEFA Champions League trophies. In 2021, he transferred to Paris Saint-Germain, continuing to showcase his exceptional skill and vision on the field. Internationally, Messi has been a key player for Argentina, leading the national team to victory in the Copa América in 2021 and the FIFA World Cup in 2022.'
    },
    {
      name: 'Angel Di Maria',
      img:'image/angeldimaria.jpg',
      age: 36,
      activePlayer: true,
      position: 'mid',
      strengths: 'dribbling ability, quick feet, agility, and close control',
      weaknesses: 'injury proneness, decision-making, inconsistency',
      skills: ['Dribbling', 'Fast', 'Passing', 'Shooting', 'High energy', 'Versatility'],
      biography:
        'Ángel Di María, born on February 14, 1988, in Rosario, Argentina, is a versatile and skilled footballer who has played for top clubs like Real Madrid, Manchester United, and Paris Saint-Germain, achieving significant success including a UEFA Champions League title with Real Madrid. Internationally, he has been pivotal for Argentina, helping the national team win the Copa América in 2021 and the FIFA World Cup in 2022. Known for his speed, agility, and goal-scoring ability, Di María remains a prominent figure in the world of football.'
    },
    {
      name: 'Neymar Jr',
      img:'image/neymar.jpg',
      age: 32,
      activePlayer: true,
      position: 'forward',
      strengths: 'Ball Control, Fast and has a good eye for goals',
      weaknesses: 'heading ability',
      skills: ['Dribbling', 'Shooting', 'Finishing','Versitile'],
      biography:
        "Neymar, born on February 5, 1992, in Mogi das Cruzes, Brazil, is a highly skilled footballer known for his exceptional dribbling, creativity, and goal-scoring abilities. He rose to prominence with Santos FC before transferring to FC Barcelona in 2013, where he formed a formidable attacking trio with Lionel Messi and Luis Suárez, winning numerous titles including the UEFA Champions League. In 2017, he moved to Paris Saint-Germain for a record transfer fee, continuing to showcase his talent and contributing significantly to the team's success domestically and in European competitions."
    },
    {
      name: 'Diego Godin',
      img: 'image/diegogodin.jpg',
      age: 38,
      activePlayer: true,
      position: 'defender',
      strengths: 'Aerial ability, Leadership, Composure, Experience',
      weaknesses: 'Mobility, Distribution under pressure, and Injury prone',
      skills: ['Tackling', 'Positioning', 'Passing',],
      biography: "Born on February 16, 1986, in Rosario, Uruguay, Godín is renowned for his leadership, defensive prowess, and aerial ability. He spent the prime years of his career at Atlético Madrid, where he was instrumental in their successes, including winning La Liga in 2014 and reaching two UEFA Champions League finals. Additionally, Godín has been a key figure for the Uruguayan national team, contributing to their Copa América victory in 2011."
  },
  {
    name: 'Diego Maradona',
    img: 'image/diegomara.jpg',
    age: 37,
    activePlayer: true,
    position: 'mid-fielder',
    strengths: 'Dribbling, Creativity, Goal Scoring',
    weaknesses: 'Defensive and work rate',
    skills: ['Dribbling', 'Vision', 'Passing',],
    biography: "Diego Maradona, born on October 30, 1960, in Buenos Aires, Argentina, is one of the most iconic footballers in history. Known for his incredible dribbling, creativity, and goal-scoring ability, Maradona led Argentina to World Cup victory in 1986. His career included stints at top clubs like Napoli and Barcelona, where he left a lasting legacy. Despite controversies, his influence on the game remains unparalleled."
}
  ];
  
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
        case 'mid-fielder':
          backgroundColor = 'gray'
      }
  
      card.innerHTML = `
              <div class="card small-card">
              <img src="${member.img}" class="card-img-top">
                  <div class = "card-header">
                      ${member.name}
                  </div>
                  <div id="cardBody" class="card-body" style="background-color:${backgroundColor};">
                      <p><strong>Age:</strong> ${member.age}</p>
                      <p><strong>Position:</strong> ${member.position}</p>
                      <p><strong>Strengths:</strong> ${member.strengths}</p>
                      <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                      <p><strong>Skills:</strong> ${member.skills}</p>
                      <p><strong>Biography:</strong> ${member.biography}</p>
                  </div>
              </div>
          `
  //will update the BG style on each child of the card
      for (let i = 0; i < card.children.length; i++) {
        card.children[i].style.backgroundColor = backgroundColor
      }
  
      teamCardsContainer.appendChild(card)
    });
  }
  window.onload = generateTeamCards();