import CVTemplate from '../cv-template'
import './design_one.scss'

export default class CVTemplateDesign1 extends CVTemplate {
    _setup() {
        return (
            `<div class="cv_template">
                <div class="content">
                    <header>
                        <div class="cv_template-row">
                            ${this.header}
                        </div>
                    </header>
                    
                    <main>
                        <div class="cv_template-row cv_template-two_columns">
                            <div>
                                ${this.profile}
                                
                                ${this.experience}
    
                            </div>
                            
                            <div>
                                ${this.education}
                                
                                ${this.skills}
    
                            </div>
                        </div>
                    
                    </main>

                    <footer>
                        ©2021
                    </footer>

                </div>
            </div>`
        )
    }
}