## Build

```bash
$ docker build -t your-tag .
```

## Test

```
$ docker run your-tag refer-config
[+] config.FOOBAR: undefined
$ docker run --env FOOBAR=42 your-tag refer-config
[+] config.FOOBAR: 42
$ docker run your-tag refer-env
[+] env.FOOBAR: undefined
$ docker run --env FOOBAR=42 your-tag refer-env
[+] env.FOOBAR: 42
```
