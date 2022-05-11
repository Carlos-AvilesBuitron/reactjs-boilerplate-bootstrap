describe('homepage load and click', () => {
	it('user can see page heading and click button', () => {
		// page loads
		cy.visit('localhost:3000/')
		// find the header
		cy.findByRole('heading', {
			name: /welcome to the app/i,
		})
		// find the button
		// user clicks on the button
		cy
			.findByRole('button', {
				name: /log/i,
			})
			.click()
	})
})
