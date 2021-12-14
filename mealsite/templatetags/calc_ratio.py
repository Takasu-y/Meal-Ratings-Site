from django import template

register = template.Library()

@register.filter(name='calcRatio')
def calcRatio(value):
    #max値=5に対するパーセンテージを算出する
    rating = value
    ratio = int(round(rating/5, 1)*100)

    return ratio