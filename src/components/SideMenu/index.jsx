import '../../styles/side-menu.css';

function SideMenu() {
    return (
        <aside className='side-menu-container'>
            <nav>
                <ul>
                    <li>
                        <button>
                            <img src={require("../../assets/icon_yoga.svg").default} alt="Activité yoga" className='icon' />
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src={require("../../assets/icon_swimming.svg").default} alt="Activité nage" className='icon' />
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src={require("../../assets/icon_bicycle.svg").default} alt="Activité vélo" className='icon' />
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src={require("../../assets/icon_dumbbell.svg").default} alt="Activité haltère" className='icon' />
                        </button>
                    </li>
                </ul>
            </nav>
            <span>Copyright, SportSee 2020</span>
        </aside>
    );
}

export default SideMenu;
