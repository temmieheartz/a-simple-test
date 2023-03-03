var app = {

	fs: require('fs'),
	nwbuilder: require('nw-builder'),
	
	compile: function(){

		var cHash = this.fs.readFileSync('hash.txt', 'utf8')
		
		const nw = new this.nwbuilder({

			appName: 'Test',
			appVersion: 'Unknown',

			zip: !0,
			arch: 'x64',
			mode: 'build',
			srcDir: './',
			files: './**/**',
			ourDir: './Build/',
			platforms: ['win64'],

			// Set flavor and version
			flavor: 'sdk',
			version: 'latest',

			// Windows settings
			winVersionString: {
				'FileVersion': cHash,
				'ProductName': 'Test',
				'ProductShortName': 'Test',
				'CompanyName': '...|--|...',
				'CompanyShortName': '...|--|...',
				'LegalCopyright': '2023 - TemmieHeartz',
				'FileDescription': '\"Only the one who pays attention know what this means...\"'
			}

		});

		nw.build();

	}

}

app.compile();
