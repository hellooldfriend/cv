export default function educationTemplate(data) {
    if(!data || !data.length) return null

    return `
        <div class="cv_template-block">
            <h2>Education</h2>
            ${data.map(education => {
                return `
                    <div>                        
                        <div class="cv_template-education-place">
                            ${education.place}
                        </div>                
                        <div class="cv_template-education-specialization">
                            ${education.specialization}
                        </div>           
                        <div class="cv_template-education-info">
                            <div class="cv_template-education-dates">
                                ${education.datetimeFrom} – ${education.datetimeTo}
                            </div>
                            <div class="cv_template-education-location">
                                ${education.locationCity}, ${education.locationCountry}
                            </div>
                        </div>
                    </div>
                `
            })}
        </div>
    `
}