
const selectedWorks = [
    {
        id: "fveev",
        title: 'Project name',
        description: 'Ecommerce',
        tags: ["Mobile"],
        image: ""
    },
    {
        id: "vev",
        title: "Previous Portfolios",
        description: 'My previous porfolio shows how I have improved over the years',
        tags: ["html", "portfolio"],
        image: ""
    }
]

const SelectedWorks = () => {
    return (
        <div>
            <h1> Selected Works</h1>
            <p> A collection of my works and projects and experiments that contains my engineeing of projects</p>

            <div className="grid ">
                {
                    selectedWorks.map(({
                        id, title, description, tags, image
                    }) => (
                        <div key={id}>
                            <h4> {title} </h4> 
                            <h3> {description} </h3>
                            {
                                tags.map((tag) => (
                                    <span> { tag }</span>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SelectedWorks