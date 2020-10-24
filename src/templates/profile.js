export default function profileTemplate(data) {
    if(!data) return null

    return `
        <div class="cv_template-block">
            <h2>Profile</h2>
            <div>
                ${data.description}
            </div>
        </div>
    `
}