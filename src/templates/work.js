export default function workTemplate(data) {
    if(!data || !data.length) return ''

    return `
        <div class="cv_template-block">
            <h2>Work</h2>
            <div>
                ${data.map(work => {
                    return `
                        <div>
                            <h3>${work.title}</h3>
                            <p>${work.description}</p>
                            <a href="${work.url}">${work.urlTitle}</a>
                        </div>
                    `
                })}
            </div>
        </div>
    `
}