export default {
	baseURL: 'http://bluelink.jmhsmy.com',
	request(options) {
		let token = uni.getStorageSync('token')
		// let token = '23657abf-7a04-4687-948a-8749f425ed30'
		return new Promise((resolve, reject) => {
			uni.request({
				url: this.baseURL + options.url,
				header: {
					'Content-Type': 'application/json;charset=UTF-8',
					// 'Content-Type': 'application/x-www-form-urlencoded',
					'X-Auth-Token': token,
				},
				data: options.data,
				method: options.method,
				dataType: options.dataType,
				responseType: "text",
				success(res) {
					if (res.data.code === 0 && res.statusCode === 200) {
						resolve(res.data)
					} else {
						reject(res.data.message)
						uni.showToast({
							title: res.data.message,
							icon: 'none',
						})
					}
				},
				fail(err) {
					uni.showToast({
						title: '网络错误！',
						icon: 'none'
					})
				},
				complete(res) {
					if (res.statusCode !== 200) {
						uni.showToast({
							title: res.data,
							icon: 'none'
						})
					}
				}
			})
		})
	},

	get(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	},
	post(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	},
	put(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'PUT'
		return this.request(options)
	},
	del(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	}

}
