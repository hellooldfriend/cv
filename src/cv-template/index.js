import headerTemplate from '../templates/header'
import educationTemplate from '../templates/education'
import experienceTemplate from '../templates/experience'
import profileTemplate from '../templates/profile'
import skillsTemplate from '../templates/skills'

export default class CVTemplate {
    constructor(selector, options) {
        this.$el = document.getElementById(selector)
        this.options = options

        this.profile = profileTemplate(this.options.profile)
        this.header = headerTemplate(this.options.header)
        this.education = educationTemplate(this.options.education)
        this.experience = experienceTemplate(this.options.experience)
        this.skills = skillsTemplate(this.options.skills)

        this._render()
    }

    _setup() {
        throw new Error('This method should be implemented')
    }

    _render() {
        const header = this.options.header
        document.title = header.name + ' | ' + header.position
        this.$el.innerHTML = this._setup()
    }
}

