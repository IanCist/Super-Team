const teamMembers = {
    name:'Lionel Messi',
    age: 36,
    activePlayer: true,
    position: 
    strengths:
    weaknesses:
    skills:
    biography:
}

function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

        card.innerHTML = `
            <div class="card">
            <div class = "card-header">
            ${member.name}
            <div>
            <div class="card-body">
            <p><strong>Position:</strong> $(member.position) </p>
            </div>
        </div>
        
        `

    teamCardsContainer.appendChild(card)
    });


}

window.onload = generateTeamCards()