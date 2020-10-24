export default function headerTemplate(data) {
    if(!data) return null

    return `
        <div class="cv_template-block cv_template-header">
            <h1>${data.name}</h1>
            <div class="cv_template-header-title">${data.position}</div>
            
            <div class="cv_template-links">
                ${data.links.map((link, index) => {
                    return (
                        `<a 
                            class="cv_template-link"
                            href="${link.url}"    
                        >${link.label}</a>`
                    )
                }).join('')}
            </div>
        </div>
    `
}