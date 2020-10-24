export default function experienceTemplate(data) {
    if(!data || !data.length) return null

    return `
        <div class="cv_template-block">
            <h2>Experience</h2>
            ${data.map(experience => {
                return `
                    <div>
                        <h3>${experience.position}</h3>
                        <div class="cv_template-experience-company">
                            <a href="${experience.companyWebsite}">
                                ${experience.company}
                            </a>
                        </div>
                        
                        <div class="cv_template-experience-info">
                            ${experience.datetimeFrom} – ${renderDatetime(experience.datetimeTo)}
                        </div>
                        
                        <div class="cv_template-experience-description">
                            ${experience.description}
                        </div>
                    </div>
                `
            })}
        </div>
    `
}

function renderDatetime(datetime) {
    if(datetime === null) return 'Ongoing'

    return datetime
}

function countTotalDatetime(from, to) {

}