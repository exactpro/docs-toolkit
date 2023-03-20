# Nuxt content components

These vue components can be [used in markdown files](https://content.nuxtjs.org/guide/writing/mdc).

## Notice

[Notice component](Notice.vue) is created to highlight some part of the text. 

It supports 4 color modes:
- default (gray)
- info (blue)
- note (yellow)
- warning (red)

### Usage

Default:

```md
::notice

  Your text

::
```

Info:

```md
::notice{info}

  Your text

::
```

Note:

```md
::notice{note}

  Your text

::
```

Warning:

```md
::notice{warning}

  Your text

::
```

## Term

[Term component](Term.vue) is displayed like an underlined word, but it also can create popup with its definition.

To see definition, hover the term. To close popup, click outside.

### Terms definitions

All terms definitions should be created as `md` files in [`content-terms` directory](../../content-terms).

Term definition should contain `title` or `alias` to be fetched in popup.

- `title`: string - name of the term (if not defined explicitly, first level header will become title)
- `alias`: list of strings - additional spellings of the term

Example of term with:

- `title`: `Participant`
- `alias`: `null`

```md
# Participant

An account that initiates transfer of funds through the Payment Service Provider (PSP)
```

Example of term with:

- `title`: `Business network operator (BNO)`
- `alias`: `Business network operator`, `Business Network Operator`, `business network operator`, `BNO`

```md
---
title: Business network operator (BNO)
alias: [Business network operator, Business Network Operator, business network operator, BNO]
---

A coordinating party of a Corda business network who manages the distribution of the app and rules, including membership, for its use. 

See the term in [R3 documentation](https://docs.r3.com/en/platform/corda/4.9/community/introduction/bno.html)
```

### Usage

Use [inline MDC syntax](https://content.nuxtjs.org/guide/writing/mdc#inline-components):

- inside `[]` specify text, which should be displayed in content
- inside `{}` specify `term` property for to search term definition by it title or alias

```md
As :term[business network operator]{term="BNO"} I love each :term[participant]{term="Participant"} in my network.
```

Result: As <u>business network operator</u> I love each <u>participant</u> in my network.