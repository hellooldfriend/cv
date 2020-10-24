export default function skillsTemplate(data) {
    if(!data) return null
    const dataArray = Object.entries(data)
    return `
        <div class="cv_template-block">
            <h2>Skills</h2>
            ${dataArray.map(skillSet => {
                if(!skillSet[1].length) return null
                return `
                    <div>
                        <h3>${formatTitle(skillSet[0])}:</h3>
                        ${skillSet[1].map(skill => {
                            return `<div>– ${skill}</div>`
                        }).join('')}
                    </div>
                `  
            }).join('')}
        </div>
    `
}

function formatTitle(title) {
    return title[0].toUpperCase() + title.slice(1)
}