# Dockerfiles

> A production-ready example of dockerfiles for node.js


```bash
                  ##        .
            ## ## ##        ==
         ## ## ## ## ##    ===
     /"""""""""""""""""\___/ ===
~~~ {~~ ~~~~ ~~~ ~~~~ ~~~ ~ /  ===- ~~~
     \______ o           __/
       \    \         __/
        \____\_______/
```


[![Maintenance](https://img.shields.io/maintenance/yes/2018.svg)]() [![License](https://img.shields.io/github/license/hashlab/dockerfiles.svg)](https://github.com/hashlab/dockerfiles/blob/master/LICENSE) [![Twitter Follow](https://img.shields.io/twitter/follow/chrisenytc.svg?style=social&label=Follow)](http://twitter.com/chrisenytc) [![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Awesome%20https://github.com/hashlab/dockerfiles%20via%20@chrisenytc)

## Getting Started

1º Clone dockerfiles repo

```bash
$ git clone git@github.com:hashlab/dockerfiles.git
```

2º Enter in dockerfiles directory
```bash
$ cd dockerfiles
```

3º Run the setup script
```bash
$ make setup
```

4º Configure the environment variables
```bash
$ nvim .env
```

5º Run the bot
```bash
$ make start
```

## Conventions of commit messages

Addding files on repo

```bash
git commit -m "Add filename"
```

Updating files on repo

```bash
git commit -m "Update filename, filename2, filename3"
```

Removing files on repo

```bash
git commit -m "Remove filename"
```

Renaming files on repo

```bash
git commit -m "Rename filename"
```

Fixing errors and issues on repo

```bash
git commit -m "Fixed #issuenumber Message about this fix"
```

Adding features on repo

```bash
git commit -m "Add feature: nameoffeature Message about this feature"
```

Updating features on repo

```bash
git commit -m "Update feature: nameoffeature Message about this update"
```

Removing features on repo

```bash
git commit -m "Remove feature: nameoffeature Message about this"
```

## Contributing

Bug reports and pull requests are welcome on GitHub at [https://github.com/hashlab/dockerfiles](https://github.com/hashlab/dockerfiles). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

1. Fork it [hashlab/dockerfiles](https://github.com/hashlab/dockerfiles/fork)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am "Add some feature"`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/hashlab/dockerfiles/issues).

## License 

Check [here](LICENSE).
