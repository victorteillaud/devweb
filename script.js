const PhonesList = [
	{
		title: "Iphone 16 Pro",
		year: 2024,
		imageUrl:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-model-unselect-gallery-2-202409_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=aWs5czA5aDFXU0FlMGFGRlpYRXk2UWFRQXQ2R0JQTk5udUZxTkR3ZVlpSlo4cUtOVXZ0VkpGRlBQT0VQc1Qrd1B1OWIzMk5Pa05pM0VtRDBtTXRCK3dUMngwVnJycmY0WkN2ZnNvOUpFNFd0WXdwZkhSYStycUNlU1I0YzZvelo0dGx0Y1ZLQlV5bmZsVklVZzRYdC9R&traceId=1",
		id: 1,
	},
	{
		title: "Iphone 15",
		year: 2023,
		imageUrl:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-model-unselect-gallery-2-202309_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=aVFiZEF4WDEvUWJNSU5HRDg4cklnTGdzSmpObkZCM3MrNmJ5SkhESlNDZ2lGQTRGNnVYNjZ6NWNNT2RQbEdmK3ovdld4NkVCZ3JUZXJyZ1dUb1MwM0dKTG1lVWJJT2RXQWE0Mm9rU1V0V0JCV3NjNWl1UW9rVFRPUVBJRWJDd2NQb3R0UW1Yc3h6Um5aMXhHRitCYTBB&traceId=1",
		id: 2,
	},
	{
		title: "Iphone 14",
		year: 2022,
		imageUrl:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-model-unselect-gallery-2-202303_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=NjB6M3BqTGRudDZtakJrUG5tT2pHTGdzSmpObkZCM3MrNmJ5SkhESlNDZ1hBSXMwL2Jwdk9oTk42KzZHdTdNUXovdld4NkVCZ3JUZXJyZ1dUb1MwM0dKTG1lVWJJT2RXQWE0Mm9rU1V0V0IxZG1zQmhZY3FpN094bFJrYnF5eDR2azA1RzdtcFQ5a1dBaURTY0hJUEJB&traceId=1",
		id: 3,
	}
]
PhonesList.forEach((phone) => {
	console.log(phone)
})

function writeDom() {
	PhonesList.forEach((phone) => {
		const articleContainer = document.querySelector(".row")
		articleContainer.innerHTML += `<article class="col">
                    <div class="card shadow-sm">
                        <img src="${phone.imageUrl}" alt="${phone.title}" class="card-img-top" />
                        <div class="card-body">
                        <h3 class="card-title">${phone.title}</h3>
                            <p class="card-text">${phone.year}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>`
	})
}

writeDom()
