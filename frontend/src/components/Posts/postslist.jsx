import React from "react";
import Post from "./Post/post";

function Content() {
    const posts = [
        {
            title: "The long title of the post and I don't know why is so long",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lectus justo, facilisis et finibus in, iaculis vehicula turpis. Sed nisi ligula, lobortis vitae fermentum at, mollis imperdiet eros. Vestibulum luctus pellentesque posuere. Aliquam id dolor eu magna placerat bibendum a vel nisl. Nulla quis neque viverra, accumsan lacus ut, lacinia massa. Cras sit amet lorem condimentum, vulputate nisl eu, fringilla justo. Nunc feugiat tortor non erat malesuada, non lacinia nibh sagittis.\nNullam vel tellus nec ipsum accumsan dictum quis id diam. Etiam gravida hendrerit metus at gravida. Quisque at risus in justo ultrices sodales. Sed est orci, sagittis non nunc nec, efficitur tempus nulla. Vestibulum cursus nibh et ipsum elementum elementum. Fusce maximus mi scelerisque dolor dictum, vitae aliquam urna lacinia. Integer sed laoreet nulla. Aenean efficitur eleifend velit, ut porttitor leo scelerisque eu. Sed vehicula dapibus fermentum. Sed imperdiet nibh et risus lacinia finibus. Maecenas nec ante in massa vehicula bibendum tristique eget diam. Cras malesuada, velit pulvinar venenatis tempus, erat quam rutrum dolor, tristique egestas tortor dui a mauris. Ut eu lacus vel mauris faucibus commodo non id lacus. Cras odio lectus, tempor laoreet commodo in, porttitor tincidunt metus.\nIn augue enim, varius at diam id, faucibus tempor sem. Vestibulum efficitur quam non purus efficitur egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec eu nisl et metus pretium dignissim elementum et nibh. Fusce ultrices sapien non mi egestas, sed tincidunt ipsum iaculis. Nullam consectetur, quam eget fermentum cursus, felis felis tempor mi, id maximus nisl massa in elit. Morbi at felis nisi. Integer sit amet enim in mauris porta luctus ut dignissim tortor. Fusce justo metus, congue id nisi eu, rhoncus vulputate magna. Curabitur ut enim ut tellus dictum facilisis. Aenean vel arcu ac libero malesuada ornare a mollis libero. Praesent malesuada efficitur tristique.\nAliquam gravida vestibulum orci non vestibulum. Vivamus non mauris nec quam sodales ultricies. Pellentesque gravida risus et aliquet finibus. Morbi sem sapien, cursus id urna at, pellentesque placerat elit. Suspendisse varius nibh egestas magna consectetur, ut gravida diam fringilla. Nulla vel leo et sem tempor ultricies ac vitae nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia tempor quam faucibus maximus. Proin auctor lobortis justo. Etiam ut malesuada massa, hendrerit faucibus ipsum. Proin quis urna nec nibh commodo faucibus. Duis hendrerit leo orci, sit amet fringilla orci rhoncus quis. Etiam sed dui turpis.\nIn pharetra justo ut nunc vestibulum, sed accumsan tellus rhoncus. Vivamus lobortis elementum urna ut laoreet. Aliquam varius ex eget fermentum eleifend. Fusce egestas tortor suscipit, tincidunt justo eget, efficitur neque. Etiam efficitur magna non sem laoreet, nec lobortis lacus consectetur. Morbi rutrum, sem id vehicula imperdiet, justo ex dapibus enim, non congue turpis magna non enim. Proin vulputate risus ac nibh consectetur, at vehicula massa lobortis. In posuere mollis consequat. Praesent vel magna justo. Donec eget porttitor eros, ut pharetra ante. "
        },
        {
            title: "The long title of the post and I don't know why is so long2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lectus justo, facilisis et finibus in, iaculis vehicula turpis. Sed nisi ligula, lobortis vitae fermentum at, mollis imperdiet eros. Vestibulum luctus pellentesque posuere. Aliquam id dolor eu magna placerat bibendum a vel nisl. Nulla quis neque viverra, accumsan  turpis.\nIn pharetra justo ut nunc vestibulum, sed accumsan tellus rhoncus. Vivamus lobortis elementum urna ut laoreet. Aliquam varius ex eget fermentum eleifend. Fusce egestas tortor suscipit, tincidunt justo eget, efficitur neque. Etiam efficitur magna non sem laoreet, nec lobortis lacus consectetur. Morbi rutrum, sem id vehicula imperdiet, justo ex dapibus enim, non congue turpis magna non enim. Proin vulputate risus ac nibh consectetur, at vehicula massa lobortis. In posuere mollis consequat. Praesent vel magna justo. Donec eget porttitor eros, ut pharetra ante. "
        }
    ]
    return (
        <div className="grid grid-cols-6 flex-1">
            <div></div>
                <div className="col-span-4 bg-emerald-400 p-4">
                    { posts.map(post => <Post title={post.title} description={post.description} />)}
                </div>
            <div></div>
        </div>
    )
}

export default Content