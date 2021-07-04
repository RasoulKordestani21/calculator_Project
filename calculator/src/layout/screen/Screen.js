import { Header } from './header/header'
import { Section } from './section/Section'
import classes from './screen.module.css'
function Screen() {
    return (
        <div className={classes.screen}>
            <Header/>
            <Section/>
        </div>
    )
}

export default  Screen