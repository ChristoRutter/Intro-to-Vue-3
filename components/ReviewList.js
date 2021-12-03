app.component('review-list', {
    props:{
        reveiws:{
            type: Array,
            required: true
        }
    },
    template: 
    `
        <div class="review-conatiner">
            <h3>Reviews:</h3>
            <ul>
                <li v-for="(review, index) in reviews" :key="index">
                    {{review.name}} gave this {{review.rating}} stars
                    <br />
                    "{{review.review}}"
                </li>
            </ul>
        </div>
    `
})